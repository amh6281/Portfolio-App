import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

export const metadata = {
  title: "MyWeB Contact Information",
  description: "This is MyWeB Contact page",
};

const Contact = () => {
  return (
    <div className>
      <h1 className={styles.title}>문의하기</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          />
          <Button url="#" text="문의하기" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
