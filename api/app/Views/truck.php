<!DOCTYPE html>
<html>

<head>
  <title>Trucking Order Update | Best Logistic Surabaya</title>
  <meta name="description" content="Order Update untuk Truck <?= esc($barang, 'attr') ?> sekarang dalam status <?= esc($status, 'attr') ?>" />

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
      <h2>Status order</h2>
      <p>Yth, <?= $nama ?> berikut update status order trucking anda:</p>
      <table>
        <tbody>
          <tr>
            <td>Nomor Penyewaan</td>
            <td><b>BLST<?= sprintf("%04d", $resi) ?></b></td>
          </tr>
          <tr>
            <td>Nama Barang</td>
            <td><b><?= $barang ?></b></td>
          </tr>
          <tr>
            <td>Start Point</td>
            <td><b><?= $tujuan ?></b></td>
          </tr>
          <tr>
            <td>Status Order</td>
            <td><b><?= $status ?></b></td>
          </tr>
        </tbody>
	  </table>
    <?php if ($to_admin) : ?>
      <p><b>Ini adalah notifikasi untuk Admin.</b> Silahkan mengatur status order ini di <a href="https://bestlogisticsurabaya.com/admin/order/detail/<?= $resi ?>">Area member</a></p>
    <?php else : ?>
      <p>
        Terima kasih telah menyewa truck dengan Best Logistic Surabaya. <br>
        Anda selalu dapat mengecek status order anda di <a href="https://bestlogisticsurabaya.com/user/order/detail/<?= $resi ?>">Area member</a>. <br>
        Anda juga dapat <a href="https://bestlogisticsurabaya.com/#chat" target="_blank">bertanya pada kami</a> sewaktu-waktu.</p>
    <?php endif ?>
    </div>

    <div class="footer">
      <p>Best Logistic Surabaya</p>
      <p>Ruko Korem Bhaskarajaya 084<br> Jl. Wisata Menanggal No.57 Dukuh Menanggal Surabaya</p>
      <p><a href="https://bestlogisticsurabaya.com">bestlogisticsurabaya.com</a></p>
    </div>
  </div>

</body>

</html>