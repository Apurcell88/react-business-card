const Info = () => {
  return (
    <section className="info__container">
      <img className="info__pic-me" src="/images/person.jpg" alt="me" />
      <h1 className="info__name">Adam Purcell</h1>
      <h2 className="info__career">Frontend Engineer</h2>
      <h3 className="info__email">apurcell88@gmail.com</h3>
      <article className="info__buttons-container">
        <button className="info__email-btn info__btn">Email</button>
        <button className="info__linkedin-btn info__btn">LinkedIn</button>
      </article>
    </section>  
  );
}
 
export default Info;