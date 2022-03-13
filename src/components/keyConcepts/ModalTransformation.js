import { basicPlay } from "../../util/aboutNotePlayer";

const ModalTransformation = () => {
  return (
    <div>
      <h2 className="center">Modal Transformations of Ratio-Based Scales</h2>
      <p>
        We can construct scales entirely out of ratio sets. One such scale is
        Ptolemy's Intense Diatonic Scale, which can be said to be a pure version
        of what our standard 12 tone equal temperament major scale approximates.
      </p>
      <table>
        <tbody>
          <tr>
            <td className="lighterTable">Degree</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>1</td>
          </tr>
          <tr>
            <td className="lighterTable">Ratio</td>
            <td>1/1</td>
            <td>9/8</td>
            <td>5/4</td>
            <td>4/3</td>
            <td>3/2</td>
            <td>5/3</td>
            <td>15/8</td>
            <td>2/1</td>
          </tr>
          <tr>
            <td className="lighterTable">Cents</td>
            <td>0</td>
            <td>203.910</td>
            <td>386.314</td>
            <td>498.045</td>
            <td>701.955</td>
            <td>884.359</td>
            <td>1088.269</td>
            <td>1200</td>
          </tr>
        </tbody>
      </table>
      <br />

      <div className="center">
        <button className="mb" onPointerDown={() => basicPlay([220])}>
          1/1
        </button>
        <button className="mb" onPointerDown={() => basicPlay([247.5])}>
          9/8
        </button>
        <button className="mb" onPointerDown={() => basicPlay([275])}>
          5/4
        </button>
        <button className="mb" onPointerDown={() => basicPlay([293.333])}>
          4/3
        </button>
        <button className="mb" onPointerDown={() => basicPlay([330])}>
          3/2
        </button>
        <button className="mb" onPointerDown={() => basicPlay([366.666])}>
          5/3
        </button>
        <button className="mb" onPointerDown={() => basicPlay([412.5])}>
          15/8
        </button>
        <button className="mb" onPointerDown={() => basicPlay([440])}>
          2/1
        </button>
      </div>
      <p>
        This scale is very harmonious, since it is made up entirely of very
        simple ratios.
      </p>
      <br />
      <div className="center">—</div>
      <br />
      <p>
        One thing that we like to do in music is play in different modes of a
        given scale, meaning that interpret one of the non-root intervals in the
        scale as the root. Then, we can take those intervals and play them from
        our base Hz value.
      </p>
      <p>
        In order to do this, we take the scale degree that we would like to
        start on and subtract it from every other interval in the scale. As
        above, we do this by dividing the two intervals, which is the same as
        cross multiplication, meaning to multiply one ratio by the reciprocal of
        the other. Let's start on the second degree of the scale, 9/8.
      </p>
      <table>
        <tbody>
          <tr>
            <td>9/8</td>
            <td>÷</td>
            <td>9/8</td>
            <td>=</td>
            <td>72/72</td>
            <td>=</td>
            <td>1/1</td>
          </tr>
          <tr>
            <td>5/4</td>
            <td>÷</td>
            <td>9/8</td>
            <td>=</td>
            <td>40/36</td>
            <td>=</td>
            <td>10/9</td>
          </tr>
          <tr>
            <td>4/3</td>
            <td>÷</td>
            <td>9/8</td>
            <td>=</td>
            <td>32/27</td>
            <td>=</td>
            <td>32/27</td>
          </tr>
          <tr>
            <td>3/2</td>
            <td>÷</td>
            <td>9/8</td>
            <td>=</td>
            <td>24/18</td>
            <td>=</td>
            <td>4/3</td>
          </tr>
          <tr>
            <td>5/3</td>
            <td>÷</td>
            <td>9/8</td>
            <td>=</td>
            <td>40/27</td>
            <td>=</td>
            <td>40/27</td>
          </tr>
          <tr>
            <td>15/8</td>
            <td>÷</td>
            <td>9/8</td>
            <td>=</td>
            <td>120/72</td>
            <td>=</td>
            <td>5/3</td>
          </tr>
          <tr>
            <td>2/1</td>
            <td>÷</td>
            <td>9/8</td>
            <td>=</td>
            <td>16/9</td>
            <td>=</td>
            <td>16/9</td>
          </tr>
        </tbody>
      </table>
      <p>
        Thus, the modal transformation to the second degree of Ptolemy's Intense
        Diatonic scale yields:
      </p>
      <table>
        <tbody>
          <tr>
            <td className="lighterTable">Degree</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>1</td>
          </tr>
          <tr>
            <td className="lighterTable">Ratio</td>
            <td>1/1</td>
            <td>10/9</td>
            <td>32/27</td>
            <td>4/3</td>
            <td>40/27</td>
            <td>5/3</td>
            <td>16/9</td>
            <td>2/1</td>
          </tr>
          <tr>
            <td className="lighterTable">Cents</td>
            <td>0</td>
            <td>182.403</td>
            <td>294.135</td>
            <td>498.045</td>
            <td>680.449</td>
            <td>884.359</td>
            <td>996.090</td>
            <td>1200</td>
          </tr>
        </tbody>
      </table>
      <br />
      <div className="center">
        <button className="mb" onPointerDown={() => basicPlay([220])}>
          0
        </button>
        <button className="mb" onPointerDown={() => basicPlay([244.444])}>
          10/9
        </button>
        <button className="mb" onPointerDown={() => basicPlay([260.74])}>
          32/27
        </button>
        <button className="mb" onPointerDown={() => basicPlay([293.333])}>
          4/3
        </button>
        <button className="mb" onPointerDown={() => basicPlay([325.925])}>
          40/27
        </button>
        <button className="mb" onPointerDown={() => basicPlay([366.666])}>
          5/3
        </button>
        <button className="mb" onPointerDown={() => basicPlay([391.111])}>
          16/9
        </button>
        <button className="mb" onPointerDown={() => basicPlay([440])}>
          2/1
        </button>
      </div>
      <br />
      <br />
      <div className="center">—</div>
      <br />
      <p>
        First, please note that many scales have many excellent, usable modal
        transformations!
      </p>
      <p>
        But this one particularly results in what many consider to be a problem.
        This example was picked specifically because its 5th interval, 40/27, is
        close enough to 3/2 (about 22 cents off) that the ear tends to interpret
        it as a really out of tune 3/2. Without having specifically trained your
        pitch recognition, your ear will tend to interpret more complex ratios
        in the context of simpler ones. When a tone and a tone 40/27 away from
        it sound together, it creates a very noticeable "owowowowow" sound. This
        is known as a "wolf" interval. (Wolf 3/2 intervals are the most
        noticeable, since they are the simplest ratio other than the octave.)
      </p>
      <div className="center">
        <button className="mb" onPointerDown={() => basicPlay([220, 330])}>
          Pure 3/2 Fifth
        </button>
        <button className="mb" onPointerDown={() => basicPlay([220, 325.925])}>
          Wolf 40/27 Fifth
        </button>
      </div>
      <p>
        This is demonstrated to show why our modern musical system was created.
        It gets a little boring to have only music that is made entirely from
        the basic just ratios of Ptolemy's Intense Diatonic. It's a pretty
        sound, but it doesn't leave us with a huge amount of variety, which we
        do crave for the sonic storytelling of a well-crafted piece of music.
        But when we modulate within a system like this, we end up with dissonant
        intervals that many people consider unacceptably "bad" sounding.
      </p>
    </div>
  );
};

export default ModalTransformation;
