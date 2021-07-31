function Card({ children }) {
  return (
    <div className="flex flex-col max-w p-4 rounded-md shadow-md mb-8">
      {children}
    </div>
  );
}

export default Card;
