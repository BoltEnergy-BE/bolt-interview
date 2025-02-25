import styles from './Origin.module.scss';

const Origin = () => {
  const submitForm = async () => {
    try {
      // Simulate slow API call
      await new Promise(resolve => setTimeout(resolve, 3000));
      alert('Success! Form submitted.');
    } catch (err) {
      console.error(err instanceof Error ? err.message : 'Something went wrong!');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Contact Us</h1>

        <form onSubmit={submitForm} className={styles.form}>
          <div>
            <label>First name</label>
            <input
              type="text"
              placeholder="firstName"
              className={styles.input}
            />
          </div>

          <div>
            <label>Last name</label>
            <input
              type="text"
              placeholder="lastName"
              className={styles.input}
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="text"
              placeholder="email"
              className={styles.input}
            />
          </div>

          <div>
            <label>Message</label>
            <textarea
              placeholder="message"
              className={styles.input}
            />
          </div>

          <button
            type="submit"
            className={styles.button}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Origin;
