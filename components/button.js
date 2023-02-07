export default function Button({ className="", children }) {
    return (
        <button className={`inline-block p-2 rounded-full shadow hover:shadow-lg transition ease-out duration-500 ${className}`}>
          {children}
        </button>
    )
}
