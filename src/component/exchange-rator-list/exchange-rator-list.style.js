import styled from "styled-components";

export const RateStyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  grid-column: 1/5;
  grid-row-start: 2;

  .rate-list-item {
    border: 2px solid var(--color-antique-bronze);
    background-color: var(--color-antique-bronze);
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    color: var(--color-light);
    position: relative;
    padding-left: 80px;
    display: inline-block;
    flex-basis: 10%;
    flex-grow: 1;
    overflow: hidden;

    &::before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      content: attr(data-key);
      background-color: var(--color-yellow);
      color: var(--color-dark);
    }
  }
`;
