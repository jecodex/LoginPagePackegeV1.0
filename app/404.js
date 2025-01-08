// app/404.js
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">
        404 - পৃষ্ঠা পাওয়া যায়নি
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা পাওয়া যায়নি।
      </p>
      <a href="/" className="mt-6 text-blue-500 hover:underline">
        হোমে ফিরে যান
      </a>
    </div>
  );
}
