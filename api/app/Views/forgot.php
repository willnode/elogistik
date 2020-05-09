<!DOCTYPE html>
<html>

<head>
  <title>Reset Ulang Password | Best Logistic Surabaya</title>
  <meta name="description" content="Reset Ulang Password" />

  <style>
    .page {
      margin: 0;
      text-align: center;
      font-family: Roboto, 'Segoe UI', Arial, sans-serif;
    }

    .logo {
      margin: 0.5em 0;
    }

    table {
      margin: auto;
      text-align: left;
      min-width: 80%;
    }

    a {
      color: #e65100
    }

    .main {
      max-width: 600px;
      padding: 1em;
      margin: auto
    }

    .footer {
      background-color: #e65100;
      color: white;
      padding: 1em
    }

    .footer a {
      color: white;
      font-weight: bold;
    }
  </style>
</head>

<body>
  <div class="page">

    <img width="60px" src="https://bestlogisticsurabaya.com/assets/logo%20best%20logistic.png" class="logo" alt="Logo">
    <h1 class="title">Best Logistic Surabaya</h1>
    <div class="main">
      <p>Yth, <?= $nama ?> berikut 6 digit kode untuk reset ulang password:</p>
	  <h3><?= $otp ?></h3>
      <p>Jangan berikan kode ini ke siapapun</p>
    </div>
    <div class="footer">
      <p>Best Logistic Surabaya</p>
      <p>Ruko Korem Bhaskarajaya 084<br> Jl. Wisata Menanggal No.57 Dukuh Menanggal Surabaya</p>
      <p><a href="https://bestlogisticsurabaya.com">bestlogisticsurabaya.com</a></p>
    </div>
  </div>

</body>

</html>