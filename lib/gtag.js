export const pageview = () => {
  const url = window.location.pathname; // Get the current page path
  window.gtag("config", "G-SCZN4Q8CEQ", {
    page_path: url,
  });
};
 
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};