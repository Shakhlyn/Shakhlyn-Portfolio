import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    // console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="contact mb-32 md:w-5/6 mx-auto">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex mobile:justify-center md:justify-start w-full"
      >
        <div>
          {/* <p className="font-playfair font-semibold text-xl"> */}
          <p className="font-playfair font-semibold text-2xl ">
            <span className="text-yellow ">CONTACT ME</span> TO GET STARTED
          </p>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="mt-16 md:w-3/4 mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-10 md:mt-0"
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/646cd207185071b14707c1903f374963" //instead of using the naked e-mail, using this unique is better. No one finds the real e-mail.
            method="POST"
          >
            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-2 rounded-sm"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full bg-blue font-semibold placeholder-opaque-black p-2 mt-5 rounded-sm"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full bg-blue font-semibold placeholder-opaque-black p-2 mt-5 rounded-sm"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <div className=" flex justify-center md:justify-start">
              <button
                className="p-1 px-4 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-blue hover:text-white transition duration-500 rounded-sm"
                type="submit"
              >
                SEND ME A MESSAGE
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
