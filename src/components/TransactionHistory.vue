<template>
    <div class="container">
        <table>
            <tr>
                <th>Currency</th>
                <th>Amount</th>
                <th>Date</th>
            </tr>
            <tr>
                <td>Euro</td>
                <td>1800</td>
                <td>12.03.2020</td>
            </tr>
            <tr>
                <td>Dollar</td>
                <td>2000</td>
                <td>22.08.2018</td>
            </tr>
            <tr>
                <td>BGN</td>
                <td>600</td>
                <td>17.04.2021</td>
            </tr>
            <tr>
                <td>Gold</td>
                <td>3kg</td>
                <td>05.01.2020</td>
            </tr>
            <tr>
                <td>Bitcoin</td>
                <td>0.007</td>
                <td>30.06.2021</td>
            </tr>
           
        </table>
    </div>    
</template>

<script>
export default {
    name: 'TransactionHistory',
   
}
</script>

<style lang="css" scoped>
  table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>