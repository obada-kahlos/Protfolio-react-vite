/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Button from "../components/button/button";
import Input from "../components/input/input";
import Textarea from "../components/textarea/textarea";
import contactImage from "/public/image/contact.png";
import { Formik, Form, ErrorMessage } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required("name is required"),
    email: yup
      .string()
      .email("You must provide a valid email")
      .required("email is required"),
    message: yup.string().required("message is required"),
  });

  const handleSendEmail = (e) => {
    setIsLoading(true);
    emailjs
      .send("service_3cp3xmu", "template_okwbtzk", e, "1VXwoicodZDNi66Cr")
      .then((res) => {
        setStatus(res.status);
      })
      .catch(() => {
        toast.error("Something went wrong!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  useEffect(() => {
    if (status === 200) {
      setIsLoading(false);
      toast.success("Thanks I will reply soon", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setStatus(null);
    }
  }, [status]);

  return (
    <React.Fragment>
      <div className="relative dark:bg-secondDarkBgColor bg-whiteLightBgColor min-h-screen px-[20px] md:pt-[0px] pt-[50px] w-full md:flex md:justify-center md:flex-col md:items-center text-[#fff]">
        <h1 className="dark:text-titleDarkColor text-titleLightColor md:text-[40px] my-[20px] text-[22px]">
          Get in touch<span className="text-main-color">.</span>
        </h1>
        <div className="w-full">
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            onSubmit={(values, { resetForm }) => {
              handleSendEmail(values);
              resetForm();
            }}
            validationSchema={schema}>
            <Form>
              <div className="md:grid md:grid-cols-12 w-full items-center md:gap-10">
                <div className="md:col-span-6 col-span-12 w-full">
                  <motion.div
                    initial={{ opacity: 0, x: 0, y: 30, scale: 1, rotate: 0 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{ duration: 0.8 }}
                    className="w-full">
                    <Input
                      className={"name-input"}
                      label={"Your Name"}
                      placeholder={"Enter your name"}
                      name={"name"}
                    />
                    <ErrorMessage
                      name={"name"}
                      render={(msg) => (
                        <p className="text-error text-[14px]">{msg}</p>
                      )}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 0, y: 30, scale: 1, rotate: 0 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{ duration: 1.2 }}
                    className="w-full">
                    <Input
                      className={"email-input"}
                      label={"Email"}
                      placeholder={"Enter your email address"}
                      name={"email"}
                    />
                    <ErrorMessage
                      name={"email"}
                      render={(msg) => (
                        <p className="text-error text-[14px]">{msg}</p>
                      )}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 0, y: 30, scale: 1, rotate: 0 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{ duration: 1.6 }}
                    className="w-full">
                    <Textarea
                      className={"message"}
                      label={"Message"}
                      placeholder={"Enter message"}
                      name={"message"}
                    />
                    <ErrorMessage
                      name="message"
                      render={(meg) => (
                        <p className="text-error text-[14px]"> {meg} </p>
                      )}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 0, y: 50, scale: 1, rotate: 0 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 1,
                      rotate: 0,
                    }}
                    transition={{ duration: 2 }}
                    className="w-full mt-[20px]">
                    <Button
                      text={`${isLoading ? "Sending..." : "Send Message"}`}
                    />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 0, y: 50, scale: 1, rotate: 0 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                  }}
                  transition={{ duration: 2 }}
                  className="col-span-6 flex justify-center items-center">
                  <img src={contactImage} alt="" className="w-[500px]" />
                </motion.div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default Contact;
