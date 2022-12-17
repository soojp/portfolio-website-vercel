import React from "react";

interface CardProps {
  image: string;
  site: string | null;
  link: string;
  title: string;
  description: string;
  tags: string[];
}

const Card = ({ image, site, link, title, description, tags }: CardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-6 bg-white">
      <img className="w-full h-50 p-2" src={image} alt={title} />
      <div className="px-6">
        <div className="font-bold text-xl mb-2">
          <p>{title}</p>
        </div>
        <p className="text-base">{description}</p>
        {site ? (
          <div>
            <p className="font-bold">
              Check out the site{" "}
              <span>
                <a
                  href={site}
                  className="underline font-bold text-purple-700 hover:text-fuchsia-600"
                >
                  here
                </a>
              </span>{" "}
            </p>
          </div>
        ) : null}
        <a
          href={link}
          className="underline text-purple-700 hover:text-fuchsia-600"
        >
          Link to {title} GitHub
        </a>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag) => (
          <span className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:bg-gray-400">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
