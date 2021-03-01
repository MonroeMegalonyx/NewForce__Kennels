export const Animal = ({ animal, customer, location }) => (
  <section className="animal">
    <h3 className="animal__name">{animal.name}</h3>
    <p className="animal__breed">{animal.breed}</p>
    <address className="location__name">Location: {location.name}</address>
    <p className="customer__name">Customer: {customer.name}</p>
  </section>
);
