import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'

const Contact = () => {
  const form = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [focusedInput, setFocusedInput] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs.sendForm(
      'service_hpgpd2w',
      'template_sovso8h',
      form.current,
      'vAyBepQPVTSAqwwI4'
    )
    .then(() => {
      setSubmitStatus('success')
      form.current.reset()
    })
    .catch(() => {
      setSubmitStatus('error')
    })
    .finally(() => {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    })
  }

  const socialLinks = [
    {
      name: 'Email',
      icon: <FiMail className="w-6 h-6" />,
      url: 'pandheramit245@gmail.com',
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      icon: <FiGithub className="w-6 h-6" />,
      url: 'https://github.com/amitpandher03',
      color: 'hover:text-purple-500'
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin className="w-6 h-6" />,
      url: 'https://www.linkedin.com/in/amit-pandher-junior-dev/',
      color: 'hover:text-blue-600'
    }
  ]

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-base-100 to-base-200">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Get In Touch</h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question
            or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-3"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="form-control">
                <label className="label">
                  <span className={`label-text font-medium transition-colors duration-300 
                    ${focusedInput === 'name' ? 'text-accent' : ''}`}>
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  className={`input input-bordered w-full transition-all duration-300
                    ${focusedInput === 'name' ? 'border-accent' : ''}`}
                  onFocus={() => setFocusedInput('name')}
                  onBlur={() => setFocusedInput(null)}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className={`label-text font-medium transition-colors duration-300
                    ${focusedInput === 'email' ? 'text-accent' : ''}`}>
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  className={`input input-bordered w-full transition-all duration-300
                    ${focusedInput === 'email' ? 'border-accent' : ''}`}
                  onFocus={() => setFocusedInput('email')}
                  onBlur={() => setFocusedInput(null)}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className={`label-text font-medium transition-colors duration-300
                    ${focusedInput === 'message' ? 'text-accent' : ''}`}>
                    Message
                  </span>
                </label>
                <textarea
                  name="message"
                  className={`textarea textarea-bordered h-32 transition-all duration-300
                    ${focusedInput === 'message' ? 'border-accent' : ''}`}
                  onFocus={() => setFocusedInput('message')}
                  onBlur={() => setFocusedInput(null)}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-block group"
              >
                <span className="flex items-center gap-2">
                  {isSubmitting ? (
                    <>
                      <span className="loading loading-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <FiSend className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>
            </form>

            <AnimatePresence>
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`alert ${
                    submitStatus === 'success' ? 'alert-success' : 'alert-error'
                  } mt-6 shadow-lg`}
                >
                  <div className="flex items-center gap-2">
                    {submitStatus === 'success' ? (
                      <FiCheck className="w-6 h-6" />
                    ) : (
                      <FiAlertCircle className="w-6 h-6" />
                    )}
                    <span>
                      {submitStatus === 'success'
                        ? 'Message sent successfully!'
                        : 'Failed to send message. Please try again.'}
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:col-span-2"
          >
            <div className="card bg-base-200 w-full shadow-xl">
              <div className="card-body">
                <h3 className="text-xl font-bold mb-4">Contact Info</h3>
                <p className="text-base-content/70">
                  You can reach me through the following platforms:
                </p>
                <div className="flex flex-col gap-4">
                  {socialLinks.map((link) => (
                    <div key={link.name} className="flex items-center gap-2">
                        <a
                        href={link.url}
                        className={`btn btn-ghost btn-circle ${link.color}`}
                        >
                            {link.icon}
                        </a>
                        <p className="text-sm break-all">{link.url}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact