import Image from "next/image";
import { ReactNode } from "react";

interface TextImageSectionProps {
  title: string;
  children: ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function TextImageSection({
  title,
  children,
  imageSrc,
  imageAlt,
  reverse = false,
}: TextImageSectionProps) {
  return (
    <section className="my-12">
      <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-8`}>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          {children}
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={400}
            height={300}
            className="rounded-lg shadow"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
} 