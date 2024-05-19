import React, { useState } from 'react';
import styles from './Form.module.css';
import { Button } from 'components/Button';

export const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name) {
      errors.name = 'This field must be filled';
      isValid = false;
    }

    if (!formData.email) {
      errors.email = 'This field must be filled';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Uncorrect email';
      isValid = false;
    }

    if (!formData.bookingDate) {
      errors.bookingDate = 'This field must be filled';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = e => {
    if (validateForm()) {
      console.log('Form send', formData);
      window.location.reload();
    } else {
      e.preventDefault();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Book your campervan now</div>
      <div className={styles.subtitle}>
        Stay connected! We are always ready to help you.
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          {errors.name && (
            <span className={styles.errorMessage}>{errors.name}</span>
          )}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={styles.input}
          value={formData.name}
          onChange={handleChange}
          placeholder="Name "
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          {errors.email && (
            <span className={styles.errorMessage}>{errors.email}</span>
          )}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.input}
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="bookingDate" className={styles.label}>
          {errors.bookingDate && (
            <span className={styles.errorMessage}>{errors.bookingDate}</span>
          )}
        </label>
        <input
          type="date"
          id="bookingDate"
          name="bookingDate"
          className={styles.input}
          value={formData.bookingDate}
          onChange={handleChange}
        />
      </div>
      <div className={styles.formGroup}>
        <textarea
          id="comment"
          name="comment"
          className={styles.textarea}
          value={formData.comment}
          onChange={handleChange}
          placeholder="Comment"
        ></textarea>
      </div>

      <Button text="Send" onClick={handleSubmit} />
    </div>
  );
};
