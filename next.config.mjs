/** @type {import('next').NextConfig} */
import withVideos from 'next-videos';
import { withOutstatic } from 'outstatic/next-plugin';

const nextConfig = {
  turbopack: {},
};

export default withOutstatic(withVideos(nextConfig));

