import styled from 'styled-components';

export const OrdersContainer = styled.div`
  padding: 1em 0;

  .orderItem {
    display: block;
    width: 100%;
    vertical-align: middle;
    padding: 1.5em;

    border-bottom: 1px solid #fafafa;

    &:nth-child(even) {
      background: #fafafa;
    }

    .infoWrap {
      display: table;
      width: 100%;
    }

    .cartSection {
      display: table-cell;

      vertical-align: middle;

      .dealerName {
        font-size: 0.75em;
        color: #777;
        margin-bottom: 0.5em;
      }

      h3 {
        font-size: 1em;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.025em;
      }

      p {
        display: inline-block;
        font-size: 0.85em;
        color: #777777;

        .quantity {
          font-weight: bold;
          color: #333;
        }

        &.stockStatus {
          color: #82ca9c;
          font-weight: bold;
          padding: 0.5em 0 0 1em;
          text-transform: uppercase;

          &.out {
            color: #f69679;
          }
        }
      }

      .itemImg {
        width: 4em;

        float: left;
      }

      &.qtyWrap,
      &.prodTotal {
        text-align: center;

        p {
          font-weight: bold;
          font-size: 1.25em;
        }
      }

      input.qty {
        width: 2em;
        text-align: center;
        font-size: 1em;
        padding: 0.25em;
        margin: 1em 0.5em 0 0;
      }

      .itemImg {
        width: 8em;
        display: inline;
        padding-right: 1em;
      }
    }
  }
`;

export const Subtotal = styled.div`
  float: right;
  width: 35%;
  .totalRow {
    padding: 0.5em;
    text-align: right;

    &.final {
      font-size: 1.25em;
      font-weight: bold;
    }
    span {
      display: inline-block;
      padding: 0 0 0 1em;
      text-align: right;
    }
    .label {
      font-size: 0.85em;
      text-transform: uppercase;
      color: #777;
    }
    .value {
      letter-spacing: -0.025em;
      width: 35%;
    }
  }
  .continue {
    width: 100%;
    text-align: center;
  }
`;
