export const Employee = ({ employee, location }) => (
  <section className="employee">
    <h3 className="employee__name">{employee.name}</h3>
    <address className="location__name">Location: {location.name}</address>
  </section>
);
