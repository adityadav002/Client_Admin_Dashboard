/** @format */
import mongoose from "mongoose";

const contactFormSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
      lowercase: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const ContactForm = mongoose.model("ContactForm", contactFormSchema);
export default ContactForm;
