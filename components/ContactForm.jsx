import Ripples from 'react-ripples'

const ContactForm = () => {
  return (
    <div className="max-w-md w-full space-y-8 flex justify-center">
      <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true" />

        <div className="px-10 sm:px-0">
          <label htmlFor="email-address" className="sr-only">
            Your Email
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none  relative block sm:w-80 w-64 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
            placeholder="Your E-mail"
          />
        </div>

        <div className="px-10 sm:px-0">
          <label htmlFor="name" className="sr-only">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="current-name"
            required
            className="appearance-none  relative block sm:w-80 w-64 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
            placeholder="Your name"
          />
        </div>

        <div className="px-10 sm:px-0">
          <label htmlFor="message" className="sr-only">
            Your message
          </label>
          <input
            id="message"
            name="message"
            type="text"
            autoComplete="current-message"
            required
            className="appearance-none relative block sm:w-80 w-64 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
            placeholder="Your message"
          />
        </div>

        <div className="flex justify-center">
        <Ripples className="rounded-3xl"> 
          <button
            type="submit"
            className="group relative w-20 flex justify-center py-2 px-16 border border-transparent text-lg font-medium rounded-3xl text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
            Send
          </button>
          </Ripples>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
