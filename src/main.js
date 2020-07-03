import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { flowCash } from "./../src/flowcash.js";

$(document).ready(function() {

  $('#form').submit(function(event) {
    event.preventDefault();
    const amount = $("#usd").val();
    const convertCurrency = $("#convert").val();

    (async () => {
      let currencyExchanger = new flowCash();
      const response = await currencyExchanger.getCurrency();
      getConversion(response);
    })();

    function getConversion(response) {
      if (response.conversion_rates[convertCurrency]) {
        $('#output').text(`Your USD ${amount} is`);
      } else {
        $('#output').text(`There was an error handling your request.`);
      }
    }
  });
});
