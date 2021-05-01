import { GetStaticProps } from "next";
import { getAllThings, getThingSlugs } from "../../lib/data";
import { ThingSchema } from "../../types/thing.schema";
import Link from "next/link";

type Props = {};

export default function ThingListPage({ things }: { things: ThingSchema[] }) {
  return (
    <>
      <h1>Everything</h1>
      <ul>
        {Object.values(things).map((thing) => (
          <li key={thing.slug}>
            <Link href={`/things/${thing.slug}`}>{thing.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const things = getAllThings();

  return {
    props: {
      things: things,
    },
  };
};
