/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.builder.io",
      "picsum.photos",
      "res.cloudinary.com",
      "cdnp.kittl.com",
      "pagedone.io",
      "i.imgur.com",
    ], // Add the external image domain here
  },
};

export default nextConfig;
