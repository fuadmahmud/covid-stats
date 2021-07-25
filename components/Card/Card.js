function Card({ children }) {
  return (
    <div className="flex max-w p-3 shadow-2xl rounded-md">
      {children}
    </div>
  );
}

export default Card;
