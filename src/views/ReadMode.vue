<template>
  <section>
    <v-layout
    column
    align-center
    justify-center
    >
      <img src="../assets/logo.png" alt="more just media" height="200">

      <article class="reading-mode simple-container">
        <h1>
          Scotland, Northern Ireland and the north of England have been advised to batten down the hatches for the first named storm of the season.
        </h1>
        <p>
        <a href="#">{{ url }}</a>
        <p>
          The Met Office issued the weather alert from 6am on Wednesday, when Storm Ali was expected to roll in from the Atlantic bringing gusts of 80mph.
        </p>
        <p>
          Forecasters warned of danger to life from flying debris, while power cuts, damage to buildings, road closures and transport cancellations were also possible.
        </p>
        <p>
          Dean Hall, a meteorologist, said: “We could see close to 80mph, possibly even higher miles per hour in exposed areas in the far north of the country.”
        </p>
        <p>
          Met Office
          ✔
          @metoffice
          Very strong winds and heavy rain will reach Northern Ireland and parts of Scotland during Wednesday. @MetEireann and @metoffice have just jointly named this system "Storm Ali". Warnings will be updated later this morning. #StormAli
        </p>
        <p>
          Strong winds were expected to strengthen through the morning and be accompanied by heavy showers in some places. They would gradually ease, with the weather warning ending at 10pm.
        </p>
        <p>
          The autumnal conditions come after commuters in Scotland and northern England experienced a wet and windy start to the day on Tuesday, as the remnants of Storm Helene, downgraded from hurricane force, tracked across the British Isles. Parts of the UK were hit by gusts of about 30-40mph, with wind reaching 50mph in Wales.
        </p>
        <p>
          Forecasters cancelled a weather warning after the storm dissipated before it reached the shore. The forecast for Wednesday was not part of Storm Helene, which would have moved on, Hall said.
        </p>
        <p>
          Temperatures could climb to an above average 24C (75F) in London, after a high of 26C on Monday.
        </p>
      </article>

    </v-layout>
  </section>
</template>

<style type="text/css">
  .reading-mode {
    text-align: left;
    max-width: 800px;

    font-family: 'Merriweather', serif;
    line-height: 1.6;
    font-size: 20px;
    color: #111;
    text-rendering: optimizeLegibility;
  }

  .reading-mode h1 {
    margin-bottom: 50px;
  }
</style>

<script>

  export default {
    name: 'ReadMode',
    props: ["url"],
  }
</script>
