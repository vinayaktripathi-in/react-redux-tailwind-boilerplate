import { motion } from "framer-motion";

export const CustomAuthLayout = ({
  children,
  containerClassName,
  subContainerClassName,
}) => {
  return (
    <main
      className={`${containerClassName} bg-primary-mobile md:bg-primary-bg bg-cover bg-no-repeat flex min-h-screen flex-col justify-center items-center`}
    >
      <motion.div
        className={`${subContainerClassName} border max-w-[50rem] w-[90%] md:w-[60%] bg-white dark:bg-darkPrimary rounded-xl flex flex-col md:flex-row`}
      >
        {children}
      </motion.div>
    </main>
  );
};
