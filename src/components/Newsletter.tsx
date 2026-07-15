import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { useMailerLiteSubscribe } from '../hooks/useMailerLiteSubscribe';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const { status, message, subscribe, scheduleReset } = useMailerLiteSubscribe();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await subscribe(email);
    if (status !== 'error') {
      setEmail('');
      scheduleReset(6000);
    }
  };

  return (
    <section
      id="newsletter"
      className="relative py-24 overflow-hidden border-t border-dark-50/10"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-dark-500 via-dark-600/40 to-dark-500" />
      <div className="absolute inset-0 atmospheric-bg opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary-500/10 border border-primary-500/30"
        >
          <Mail className="w-8 h-8 text-primary-400" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 bg-clip-text text-transparent"
        >
          Join us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-secondary-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-body"
        >
          Enter your email to get notified the moment our Gamefound campaign launches.
          Don't miss out on the First Edition exclusives and KOUKI SAITOU Artcards!
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
          noValidate
        >
          <div className="relative flex-1 w-full">
            <input
              type="email"
              name="fields[email]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={status === 'loading'}
              required
              className="w-full px-5 py-4 bg-dark-400/60 backdrop-blur-sm border border-dark-50/20 rounded-lg text-secondary-100 placeholder:text-secondary-500 font-sans text-base focus:outline-none focus:border-primary-500/60 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 disabled:opacity-50"
            />
          </div>

          <motion.button
            type="submit"
            disabled={status === 'loading'}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-7 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-dark-950 font-sans font-bold text-base rounded-lg shadow-glow hover:shadow-glow-lg hover:from-primary-500 hover:to-primary-400 transition-all duration-300 flex items-center gap-2 whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Notify Me on Launch
              </>
            )}
          </motion.button>
        </motion.form>

        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6 flex items-center justify-center gap-2 text-success-400"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-sans text-base">{message}</span>
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-6 flex items-center justify-center gap-2 text-error-400"
            >
              <AlertCircle className="w-5 h-5" />
              <span className="font-sans text-base">{message}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
