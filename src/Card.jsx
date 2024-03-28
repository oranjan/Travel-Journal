export default function Card(props) {
  console.log(props);
  const {
    imageUrl,
    description,
    endDate,
    googleMapsUrl,
    location,
    startDate,
    title,
  } = props;

  return (
    <>
      <div className="card">
        <img src={imageUrl} alt="" />

        <section>
          <div>
            <span>📌{location}</span>
            <a href={googleMapsUrl}>View on Google Maps</a>
          </div>

          <h2>{title}</h2>
          <h4>
            {startDate}-{endDate}
          </h4>

          <p>{description}</p>
        </section>
      </div>
      <hr  />
    </>
  );
}
