// "use client";
// import styles from "./MobileContactForm.module.css";
// import { useState } from "react";
// import { Button } from "../ui/buttons/Button";
// import ContactForm from "../ContactForm/ContactForm";
// import classNames from "classnames";

// const MobileContactForm = () => {
//   const [isFormOpen, setIsFormOpen] = useState(false);

//   const onClick = () => {
//     setIsFormOpen(!isFormOpen);
//   };

//   return (
//     <>
//       <div className="p-4 md:hidden">
//         <Button onClick={onClick}>Contact Form</Button>
//       </div>

//       <div
//         {...(isFormOpen && { "data-is-open": true })}
//         className={classNames(styles.FormOverlay, "relative")}>
//         {isFormOpen && <ContactForm onClick={onClick} />}
//       </div>
//     </>
//   );
// };

// export default MobileContactForm;
