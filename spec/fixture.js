const html =
    `<!DOCTYPE html>

<head>
    <title>Visitor Form</title>
    <link rel="stylesheet" href="http://localhost:1221/src/visitorform.css">
</head>

<body>
    <form id=visitorForm action="/addnew_visit" method="POST" autocomplete="on">
        <label for="visitorName">Visitor Name</label><br>
        <input required type="text" id="visitorName" name="visitorName" autofocus><br>
        <label for="helperName">Your Name</label><br>
        <input required type="text" id="helperName" name="assistentName"><br>
        <label for="visitorAge">Visitor's Age</label><br>
        <input required type="number" id="visitorAge" name="age"><br>
        <label for="visitDate">Date</label><br>
        <input required type="date" id="visitDate" name="date"><br>
        <label for="VisitTime">Visit Time</label><br>
        <input required type="time" id="VisitTime" name="time"><br>
        <label for="comments">Add Comments</label><br>
        <input required type="text" class="comments" name="comments"><br>
        <input type="submit" value="Submit">
    </form>
</body>

</html>`
module.exports = html;