import style from "./Steps.module.css";

export function FourSteps() {
  return (
    <div>
      <div className={style.headerText}>
        <h1>What Will You Learn?</h1>
      </div>
      <div className={style.mainContainer}>
        <div className={style.textBlock}>
          <div>
            <span>01</span>
            <p>
              Use HDFS & Map
              <br />
              Reduce for storing &<br />
              analyzing data at scale.
            </p>
          </div>
          <div>
            <span>02</span>
            <p>
              Consume streaming
              <br /> data using Spark
              <br /> Streaming, Flink, and
              <br /> Storm.
            </p>
          </div>

          <div>
            <span>03</span>
            <p>
              Choose an
              <br /> appropriate data
              <br /> storage technology
              <br /> for your application
            </p>
          </div>
          <div>
            <span>04</span>
            <p>
              Analyze non-
              <br />
              relational data using
              <br /> HBase, Cassandra,
              <br /> and MongoDB.
            </p>
          </div>
        </div>

        <div>
          <img src="./FourSteps.png" />
        </div>
      </div>
    </div>
  );
}
