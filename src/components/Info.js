const Info = () => {
  return (
    <section className="info__container">
      <img className="info__pic-me" src="C:/Users/apurc/OneDrive/Desktop/react/business-card/src/images/info-profile-pic.jpg" alt="me" />
      <h1 className="info__name">Adam Purcell</h1>
      <h2 className="info__career">Frontend Engineer</h2>
      <h3 className="info__email">apurcell88@gmail.com</h3>
      <article className="">
        <button className="info__email-btn">Email</button>
        <button>LinkedIn</button>
      </article>
    </section>  
  );
}
 
export default Info;