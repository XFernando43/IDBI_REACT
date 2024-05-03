import { Link } from "wouter";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-center mb-4">
        404 - Página no encontrada
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <Link to="/home" className="text-blue-600 hover:underline">
        Volver a la página de inicio
      </Link>
    </div>
  );
}
