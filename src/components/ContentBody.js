import React from "react"
import styled from "styled-components"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

const ContentBody = () => {
  return (
    <StyledContent>
      <p>
        <strong>Whenever I have people over,</strong>I always do a spread.
        Sometimes it’s big. Sometimes it’s small. But I do it because it makes
        people feel adored, and people who are adored usually adore you back,
        and that’s really what life is all about. Cheese, love, adoration, and
        of course, more cheese.
      </p>
      <p>
        There is something truly magical that happens around a beautiful table
        of cheese. The typical response is “Wow, this is gorgeous. I can’t
        believe you did this for me!!” And then they nibble, talk, laugh,
        interact, ask questions, smile, and say “Mmmmmm” in between mutterings
        of, “Oh my God, this is the best cheese I‘ve ever had!!!”
      </p>
      <p>
        Meanwhile, you’ll be over there thinking, “I spent 15 minutes at the
        store, another 15 minutes cutting everything up, and these people think
        they’re at the French Laundry and I’m Thomas Keller, and I never even
        turned on the stove, HOT DAMN I’m good!”
      </p>
      <p className="important-copy">
        <FaQuoteLeft /> In this simple guide, I’ll talk about constructing a
        gorgeous spread of nourishing, wholesome, and delicious ingredients
        using a handful of cheeses and several well-chosen accompaniments like
        fruit, meats, nuts, and olives. I’ll teach you how much to buy, and how
        to serve, store, and pair accompaniments, including wines, to produce
        the cheese spread of your dreams. <FaQuoteRight />
      </p>
      <p>
        It is my wish for you to enjoy this simple guide to eating and enjoying
        delicious cheese, while creating moments and memories with your loved
        ones that will last a lifetime.
      </p>
    </StyledContent>
  )
}

const StyledContent = styled.div`
  h3 {
    margin-bottom: 1rem;
    color: var(--mainColor);
    font-size: 1.2rem;
  }
  h6 {
    font-size: 1rem;
    border-bottom: 1px solid var(--gray);
  }
  p {
    margin-bottom: 1rem;
  }
  .important-copy {
    font-weight: bold;
    svg {
      color: var(--mainColor);
    }
  }
  ul {
    margin-left: 2rem;
    margin-bottom: 1rem;
  }
`

export default ContentBody
