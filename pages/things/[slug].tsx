import { GetStaticPaths, GetStaticProps } from "next";
import { getThingBySlug, getThingSlugs } from "../../lib/data";
import styles from "../../styles/Thing.module.css";

export default function Thing(props: { [key: string]: any }) {
  return (
    <div className={styles.container}>
      <h1>Hello world.</h1>
      <p>The foo value is {props.foo}</p>
      <p>Name is {props.name}</p>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = getThingBySlug(params!.slug as string);

  return {
    props: data,
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
