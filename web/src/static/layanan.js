import React from 'react';
import Page from '../widget/page';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
	  <Typography
		component="div"
		role="tabpanel"
		hidden={value !== index}
		id={`simple-tabpanel-${index}`}
		{...other}
	  >
		{value === index && <Box p={3}>{children}</Box>}
	  </Typography>
	);
  }

export default function Layanan() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (<Page>
		<h1>Layanan Best Logistics</h1>
		<AppBar position="static">
			<Tabs value={value} onChange={handleChange}>
				<Tab label="Logistik Darat" />
				<Tab label="Logistik Laut" />
				<Tab label="Logistik Udara" />
			</Tabs>
		</AppBar>
		<TabPanel value={value} index={0}>
			Jalur Pengiriman Darat
			Salah satu model atau jenis pengiriman yang seringkali ditawarkan sebuah perusahaan adalah trucking. Berdasarkan pengertian secara luas, pengiriman trucking merupakan layanan pengiriman menggunakan jalur darat dengan armada truk maupun mobil. Selain itu jarak antarnya mulai dari antar kota bahkan sampai luar pulau sekalipun dimana barang kiriman dijadikan satu di dalam box atau bagasi. Oleh karena itulah mengapa harga trucking jauh lebih murah bila dibandingkan dengan jasa lain seperti udara yang menggunakan pesawat maupun kapal tertentu. Namun begitu estimasi waktu juga terbilang cepat karena tiap truk dan mobil pengangkut barang akan dibatasi jarak kota tujuan yang tak terlalu jauh. Apabila berada di luar pulau maka waktu tempuh lebih lama dari perkiraan karena adanya berbagai macam faktor seperti keadaan jalan, cuaca, lingkungan sekitar, dan lain sebagainya.

			Keunggulan Menggunakan Jasa Trucking Barang

			Sistem trucking mempunyai kelebihan tersendiri, salah satunya proses pengiriman mempunyai harga terjangkau. Kemudian juga dapat menerima berbagai macam logistik bahkan yang beratnya sampai 30 kilogram lebih. Karena menggunakan jalur darat maka keberadaan armada mudah dipantau dengan teknologi tracking online. Meskipun nantinya akan memakan waktu panjang namun trucking mampu melayani pengiriman lokal, luar pulau hingga luar negeri sekalipun. Sementara itu beberapa macam armada yang dipakai diantaranya seperti mobil box biasa, truk Fuso, truk engkel, tronton, container, trailer dan model truk lainnya.

			Seiring waktu model pengiriman trucking dapat dilakukan melalui jalur berbeda selain via daratan. Tersedia pula ekspedisi maupun kargo dengan memanfaatkan transportasi laut serta udara supaya memudahkan masyarakat dalam memilih dan menyesuaikannya dengan kebutuhan. Untuk pengiriman udara maka menggunakn armada pesawat sedangkan kapal roro menjadi salah satu sarana khusus untuk jalur laut.

			Tarif jasa trucking sendiri tidaklah sama, disesuaikan dengan berbagai macam faktor yang memengaruhi barang tersebut. Hal tersebut dimulai dari total berat barang, jarak rute pengiriman, volume barang, SOP, biaya jasa serta tenaga. Biasanya model jasa kirim barang yang satu ini digunakan oleh perusahaan atau pabrik besar dengan jumlah cukup banyak. Bergantung pada kebutuhan mereka, jika ingin cepat maka jalur trucking udara menjadi solusi tepat. Sebaliknya, apabila membutuhkan yang biayanya lebih murah dan menjangkau daerah lokal maka gunakan jalur darat dengan armada mobil box khusus maupun truk.

			Jika Anda berniat melakukan pengiriman dalam skala besar maupun kecil maka dapat gunakan jasa perusahaan logistik kami. Best Logistic Surabaya adalah salah satu jasa kirim barang terbaik Indonesia, mempunyai legalitas resmi sehingga sistem keamanannya terpercaya. Kami menawarkan beberapa macam pengiriman, mulai dari jalur darat, udara, bahkan laut dengan keunggulannya masing-masing.

			anda dapat melihat hasil kerja kami di <link to="/galeri">gallery</link>minat menggunakan dengan jasa kami ? silahkan klik <link to="/order">order</link>atau jika anda ingin bertanya-tanya, silahkan hubungi salah satu "admin" kami.
		</TabPanel>
		<TabPanel value={value} index={1}>
			Jalur Pengiriman Laut 
			layanan pengiriman kargo dan barang berbasis ekspedisi murah terbaik melalui jalur laut menggunakan berbagai jenis kapal, mulai dari kapal Pelni, kapal Roro & kapal lainnya.

			anda dapat melihat hasil kerja kami di <link to="/galeri">gallery</link>minat menggunakan dengan jasa kami ? silahkan klik <link to="/order">order</link>atau jika anda ingin bertanya-tanya, silahkan hubungi salah satu "admin" kami.
		</TabPanel>
		<TabPanel value={value} index={2}>
			Jalur Pengiriman Udara
			
			engerian / Definisi Cargo

			Definisi dari cargo atau kargo secara sederhana adalah semua (goods) yang dikirim melalui udara (pesawat terbang), laut (kapal), atau darat (truk container) yang biasanya untuk diperdagangkan, baik antar wilayah/kota di dalam negeri maupun antar Negara (internasional) yang dikenal dengan istilah ekspor-impor.

			IATA(2005:50) mendefinisikan kargo adalah semua barang yang diangkut atau yang akan diangkut dengan pesawat udara dengan menggunakan airway bill / SMU(Surat Muatan Udara) tetapi tidak termasuk pos atau barang lain yang dimuat dalam perjanjian konvensi pos internasional dan bagasi yang disertai tiket penumpang atau check baggage.

			Kelebihan dari pengiriman barang via cargo udara antara lain adalah sebagai berikut :

    		faktor jelajah dan kecepatan
    		Mendukung konsep Just In Time
    		Lead-time economy yang lebih singkat
    		Tuntutan terhadap kelaikan barang tidak terlalu tinggi karena proses pengiriman barang yang cepat

			Tetapi di sisi lain, penggunaan transportasi udara juga mempunyai keterbatasan sebagai berikut:

    		volume atau kubikasi barang yang diangkut terbatas
    		berat atau tonase barang dibatasi
    		sensitif terhadap situasi dan kondisi cuaca, begitu pula sekuriti dan keselamatan penerbangan
    		waktu loading-unloading  sangat singkat

			Pengertian, Jenis dan Pengiriman Barang Cargo Via Udara

			Jenis-jenis cargo yang dapat di proses melalui pengiriman udara :

    		General Cargo

    		General cargo adalah kargo atau barang yang pada umumnya memiliki sifat yang tidak membahayakan, tidak mudah rusak, busuk atau mati, barang yang tidak memerlukan penanganan khusus, persyaratan pengangkutan memenuhi ketentuan yang berlaku, serta ukuran dan beratnya dapat ditampung ke dalam ruangan (compartement) pesawat udara. Contoh : garmen, spare part, elektronik.
    		
			Special Cargo

    		Special cargo adalah kargo atau barang-barang yang memerlukan penanganan khusus baik dalam penerimaan, penyampaian atau pengangkutan. Yang dikategorikan special cargo antara lain:
        	Live Animal (AVI)
        	Special cargo berupa hewan-hewan hidup yang dikirim melalui pesawat udara seperti anak ayam, kuda, kambing, ikan, dll.
        	Human Remain ( HUM )
        	Special cargo berupa mayat manusia. HUM, yang dibagi menjadi dua yaitu :
            Uncremated in coffin adalah mayat yang masih berbentuk jasad yang diangkut dengan menggunakan peti jenazah.
            Cremated yaitu jenazah yang sudah berupa abu ( ashes ) dan biasanya dikirimkan dengan menggunakan kotak guci atau kotak kayu.

        	Perishable goods ( PER )
        	Barang – barang kargo yang mudah sekali rusak, hancur, atau busuk, seperti buah-buahan, sayuran, daging, bunga, ikan dan bibit tanaman.
        	Valuable goods ( VAL )
        	Barang-barang yang memiliki nilai yang tinggi atau barang-barang berharga seperti emas, intan, berlian, cek, platina, dll.
        	Strongly smelling goods
        	Yaitu barang yang memiliki bau yang sangat menyengat seperti durian, minyak wangi, minyak kayu putih.
        	Live Human Organ ( LHO )
        	Adalah barang – barang yang berupa organ tubuh manusia yang masih berfungsi seperti bola mata, ginjal, hati.
        	Diplomatic Pouch (DIP)
        	Yaitu barang-barang kiriman diplomatik.

    		Dangerous goods ( DG )

    		Dangerous goods adalah kargo atau barang-barang yang berbahaya yang dapat mengakibatkan terganggunya kesehatan, dan keselamatan penerbangan.
    		Dangerous goods dibagi menjadi sembilan kelas, antara lain:
        	Exsplosive goods ( REX ) adalah barang-barang berbahaya yang mudah meledak seperti mesiu, peluru, petasan, kembang api.
        	Gasses ( RPG ) adalah barang – barang yang mudah menguap seperti Butane, Hydrogen, Propane.
        	Flammable liquids ( RFL ) adalah barang -barang yang barsifat zat cair dan mudah terbakar seperti certain paints, Alcohols, Varnishes.
        	Flammable Solids ( RFS ) adalah barang – barang zat padat dan mudah terbakarseperti Matches ( Korek api )
        	Oxidizing Substances ( ROX ) & Organic peroxide adalah barang – barang yang mudahmenguap, jika dihirup manusia me
			ngakibatkan pusing atau mengantuk seperti Calcium chlorate, ammonium nitrate.
        	Toxic ( RPB ) & Infectious Substances ( RIS ) adalah barang -barang yang mengandung racunseperti sianida,pestisida, virus hidup,bakteri hidup, virus HIV.
        	Radioactive Material ( RFW ) adalah zat yang bila terkena sinar akan bereaksi dan dapat membahayakan bagi manusia, hewan dan beberapa jenis kargo.
        	Corrosives ( RCM ) adalah barang-barang yang mengandung karat seperti asam baterai danmerkuri.
        	Miscellaneous Dangerous goods ( RMD ) adalah barang-barang lain yang dianggapberbahaya dan mengancam keselamatan penerbangan apabila diangkut dengan menggunakan moda udara seperti magnet, biang es, kendaraan, kursi roda elektrik dan lain-lain.

			anda dapat melihat hasil kerja kami di <link to="/galeri">gallery</link>minat menggunakan dengan jasa kami ? silahkan klik <link to="/order">order</link>atau jika anda ingin bertanya-tanya, silahkan hubungi salah satu "admin" kami

		</TabPanel>
	</Page>)
}