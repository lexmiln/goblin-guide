import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import ChapterMarker from "../../components/ChapterMarker";
import StoryCircle from "../../components/StoryCircle";
import { getThingBySlug, getThingSlugs } from "../../lib/data";
import styles from "../../styles/Thing.module.css";
import { ThingSchema } from "../../types/thing.schema";

type Props = {
  thing: ThingSchema;
};

export default function ThingPage(props: Props) {
  return (
    <>
      <Link href="/things">← Everyone</Link>
      <h1>{props.thing.name}</h1>
      <ul className={styles.aliases}>
        {props.thing.aliases?.map((alias, i) => (
          <li key={i}>{alias.name}</li>
        ))}
      </ul>
      {props.thing.bits.map((bit, i) => (
        <div key={i} className={styles.bit}>
          {bit.text}
          <ChapterMarker chapter={bit.chapter} />
        </div>
      ))}
      <StoryCircle />
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const thing = getThingBySlug(params!.slug as string);

  return {
    props: {
      thing: thing,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const things = getThingSlugs();

  return {
    paths: things.map((thing) => {
      return {
        params: {
          slug: thing,
        },
      };
    }),
    fallback: false,
  };
};
