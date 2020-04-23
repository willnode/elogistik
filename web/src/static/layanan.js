import React from 'react';
import Page from '../widget/page';
import { Link, Route } from 'react-router-dom';
import { Context } from '../main/Contexts';
import Slider from "react-slick";
import { publicUrl } from '../main/Config';

function Darat() {
	return <>
		<h1>Jalur Pengiriman Darat</h1>
		<div className="gallery-slider compact">
			<Slider infinite>
				{
					[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((x) =>
						<img src={`${publicUrl}/assets/armada/${x}.jpeg`} alt="" key={x} />
					)
				}
			</Slider>
		</div>
		<p>Salah satu model atau jenis pengiriman yang seringkali ditawarkan sebuah perusahaan adalah trucking. Berdasarkan pengertian secara luas, pengiriman trucking merupakan layanan pengiriman menggunakan jalur darat dengan armada truk maupun mobil. Selain itu jarak antarnya mulai dari antar kota bahkan sampai luar pulau sekalipun dimana barang kiriman dijadikan satu di dalam box atau bagasi. Oleh karena itulah mengapa harga trucking jauh lebih murah bila dibandingkan dengan jasa lain seperti udara yang menggunakan pesawat maupun kapal tertentu. Namun begitu estimasi waktu juga terbilang cepat karena tiap truk dan mobil pengangkut barang akan dibatasi jarak kota tujuan yang tak terlalu jauh. Apabila berada di luar pulau maka waktu tempuh lebih lama dari perkiraan karena adanya berbagai macam faktor seperti keadaan jalan, cuaca, lingkungan sekitar, dan lain sebagainya.</p>

		<h2>Keunggulan Menggunakan Jasa Trucking Barang</h2>

		<p>Sistem trucking mempunyai kelebihan tersendiri, salah satunya proses pengiriman mempunyai harga terjangkau. Kemudian juga dapat menerima berbagai macam logistik bahkan yang beratnya sampai 30 kilogram lebih. Karena menggunakan jalur darat maka keberadaan armada mudah dipantau dengan teknologi tracking online. Meskipun nantinya akan memakan waktu panjang namun trucking mampu melayani pengiriman lokal, luar pulau hingga luar negeri sekalipun. Sementara itu beberapa macam armada yang dipakai diantaranya seperti mobil box biasa, truk Fuso, truk engkel, tronton, container, trailer dan model truk lainnya.</p>

		<p>Seiring waktu model pengiriman trucking dapat dilakukan melalui jalur berbeda selain via daratan. Tersedia pula ekspedisi maupun kargo dengan memanfaatkan transportasi laut serta udara supaya memudahkan masyarakat dalam memilih dan menyesuaikannya dengan kebutuhan. Untuk pengiriman udara maka menggunakn armada pesawat sedangkan kapal roro menjadi salah satu sarana khusus untuk jalur laut.</p>

		<p>Tarif jasa trucking sendiri tidaklah sama, disesuaikan dengan berbagai macam faktor yang memengaruhi barang tersebut. Hal tersebut dimulai dari total berat barang, jarak rute pengiriman, volume barang, SOP, biaya jasa serta tenaga. Biasanya model jasa kirim barang yang satu ini digunakan oleh perusahaan atau pabrik besar dengan jumlah cukup banyak. Bergantung pada kebutuhan mereka, jika ingin cepat maka jalur trucking udara menjadi solusi tepat. Sebaliknya, apabila membutuhkan yang biayanya lebih murah dan menjangkau daerah lokal maka gunakan jalur darat dengan armada mobil box khusus maupun truk.</p>

		<p>Jika Anda berniat melakukan pengiriman dalam skala besar maupun kecil maka dapat gunakan jasa perusahaan logistik kami. Best Logistic Surabaya adalah salah satu jasa kirim barang terbaik Indonesia, mempunyai legalitas resmi sehingga sistem keamanannya terpercaya. Kami menawarkan beberapa macam pengiriman, mulai dari jalur darat, udara, bahkan laut dengan keunggulannya masing-masing.</p>

		<p>Anda dapat melihat hasil kerja kami di <Link to="/galeri">gallery</Link>minat menggunakan dengan jasa kami ? silahkan klik <Link to="/order">order</Link>atau jika anda ingin bertanya-tanya, silahkan hubungi salah satu <a href="#/" onClick={() => Context.set('balloon', true)}>admin</a> kami.</p>
	</>;
}

function Laut() {
	return <>
		<h1>Jalur Pengiriman Laut</h1>
		<p>layanan pengiriman kargo dan barang berbasis ekspedisi murah terbaik melalui jalur laut menggunakan berbagai jenis kapal, mulai dari kapal Pelni, kapal Roro &amp; kapal lainnya.</p>
		<p>Anda dapat melihat hasil kerja kami di <Link to="/galeri">gallery</Link>minat menggunakan dengan jasa kami ? silahkan klik <Link to="/order">order</Link>atau jika anda ingin bertanya-tanya, silahkan hubungi salah satu <a href="#/" onClick={() => Context.set('balloon', true)}>admin</a> kami.</p>
	</>
}

function Udara() {
	return <>
		<h1>Jalur Pengiriman Udara</h1>

		<h3>Pengerian / Definisi Cargo</h3>

		<p>Definisi dari cargo atau kargo secara sederhana adalah semua (goods) yang dikirim melalui udara (pesawat terbang), laut (kapal), atau darat (truk container) yang biasanya untuk diperdagangkan, baik antar wilayah/kota di dalam negeri maupun antar Negara (internasional) yang dikenal dengan istilah ekspor-impor.</p>
		<p>IATA(2005:50) mendefinisikan kargo adalah semua barang yang diangkut atau yang akan diangkut dengan pesawat udara dengan menggunakan airway bill / SMU(Surat Muatan Udara) tetapi tidak termasuk pos atau barang lain yang dimuat dalam perjanjian konvensi pos internasional dan bagasi yang disertai tiket penumpang atau check baggage.</p>
		<p>Kelebihan dari pengiriman barang via cargo udara antara lain adalah sebagai berikut :</p>
		<ul>
			<li>Faktor jelajah dan kecepatan</li>
			<li>Mendukung konsep Just In Time</li>
			<li>Lead-time economy yang lebih singkat</li>
			<li>Tuntutan terhadap kelaikan barang tidak terlalu tinggi karena proses pengiriman barang yang cepat</li>
		</ul>
		<p>Tetapi di sisi lain, penggunaan transportasi udara juga mempunyai keterbatasan sebagai berikut:</p>
		<ul>
			<li>volume atau kubikasi barang yang diangkut terbatas</li>
			<li>berat atau tonase barang dibatasi</li>
			<li>sensitif terhadap situasi dan kondisi cuaca, begitu pula sekuriti dan keselamatan penerbangan</li>
			<li>waktu loading-unloading  sangat singkat</li>
		</ul>
		<h2 id="pengertian-jenis-dan-pengiriman-barang-cargo-via-udara">Pengertian, Jenis dan Pengiriman Barang Cargo Via Udara</h2>
		<p>Jenis-jenis cargo yang dapat di proses melalui pengiriman udara :</p>
		<h3 id="general-cargo">General Cargo</h3>
		<p>General cargo adalah kargo atau barang yang pada umumnya memiliki sifat yang tidak membahayakan, tidak mudah rusak, busuk atau mati, barang yang tidak memerlukan penanganan khusus, persyaratan pengangkutan memenuhi ketentuan yang berlaku, serta ukuran dan beratnya dapat ditampung ke dalam ruangan (compartement) pesawat udara.</p>
		<p>Contoh : garmen, spare part, elektronik.</p>
		<h3 id="special-cargo">Special Cargo</h3>
		<p>Special cargo adalah kargo atau barang-barang yang memerlukan penanganan khusus baik dalam penerimaan, penyampaian atau pengangkutan. Yang dikategorikan special cargo antara lain:</p>
		<h4 id="live-animal-avi-">Live Animal ( AVI )</h4>
		<p>Special cargo berupa hewan-hewan hidup yang dikirim melalui pesawat udara seperti anak ayam, kuda, kambing, ikan, dll.</p>
		<h4 id="human-remain-hum-">Human Remain ( HUM )</h4>
		<p>Special cargo berupa mayat manusia. HUM, yang dibagi menjadi dua yaitu :</p>
		<ul>
			<li>Uncremated in coffin adalah mayat yang masih berbentuk jasad yang diangkut dengan menggunakan peti jenazah.</li>
			<li>Cremated yaitu jenazah yang sudah berupa abu ( ashes ) dan biasanya dikirimkan dengan menggunakan kotak guci atau kotak kayu.</li>
		</ul>
		<h4 id="perishable-goods-per-">Perishable goods ( PER )</h4>
		<p>Barang – barang kargo yang mudah sekali rusak, hancur, atau busuk, seperti buah-buahan, sayuran, daging, bunga, ikan dan bibit tanaman.</p>
		<h4 id="valuable-goods-val-">Valuable goods ( VAL )</h4>
		<p>Barang-barang yang memiliki nilai yang tinggi atau barang-barang berharga seperti emas, intan, berlian, cek, platina, dll.</p>
		<h4 id="strongly-smelling-goods">Strongly smelling goods</h4>
		<p>Yaitu barang yang memiliki bau yang sangat menyengat seperti durian, minyak wangi, minyak kayu putih.</p>
		<h4 id="live-human-organ-lho-">Live Human Organ ( LHO )</h4>
		<p>Adalah barang – barang yang berupa organ tubuh manusia yang masih berfungsi seperti bola mata, ginjal, hati.</p>
		<h4 id="diplomatic-pouch-dip-">Diplomatic Pouch ( DIP )</h4>
		<p>Yaitu barang-barang kiriman diplomatik.</p>
		<h3 id="dangerous-goods-dg-">Dangerous goods ( DG )</h3>
		<p>Dangerous goods adalah kargo atau barang-barang yang berbahaya yang dapat mengakibatkan terganggunya kesehatan, dan keselamatan penerbangan.</p>
		<p>Dangerous goods dibagi menjadi sembilan kelas, antara lain:</p>
		<h4 id="exsplosive-goods-rex-">Exsplosive goods ( REX )</h4>
		<p>adalah barang-barang berbahaya yang mudah meledak seperti mesiu, peluru, petasan, kembang api.</p>
		<h4 id="gasses-rpg-">Gasses ( RPG )</h4>
		<p>adalah barang – barang yang mudah menguap seperti Butane, Hydrogen, Propane.</p>
		<h4 id="flammable-liquids-rfl-">Flammable liquids ( RFL )</h4>
		<p>adalah barang -barang yang barsifat zat cair dan mudah terbakar seperti certain paints, Alcohols, Varnishes.</p>
		<h4 id="flammable-solids-rfs-">Flammable Solids ( RFS )</h4>
		<p>adalah barang – barang zat padat dan mudah terbakarseperti Matches ( Korek api )</p>
		<h4 id="oxidizing-substances-rox-organic-peroxide">Oxidizing Substances ( ROX ) &amp; Organic peroxide</h4>
		<p>adalah barang – barang yang mudahmenguap, jika dihirup manusia mengakibatkan pusing atau mengantuk seperti Calcium chlorate, ammonium nitrate.</p>
		<h4 id="toxic-rpb-infectious-substances-ris-">Toxic ( RPB ) &amp; Infectious Substances ( RIS )</h4>
		<p>adalah barang -barang yang mengandung racunseperti sianida,pestisida, virus hidup,bakteri hidup, virus HIV.</p>
		<h4 id="radioactive-material-rfw-">Radioactive Material ( RFW )</h4>
		<p>adalah zat yang bila terkena sinar akan bereaksi dan dapat membahayakan bagi manusia, hewan dan beberapa jenis kargo.</p>
		<h4 id="corrosives-rcm-">Corrosives ( RCM )</h4>
		<p>adalah barang-barang yang mengandung karat seperti asam baterai danmerkuri.</p>
		<h4 id="miscellaneous-dangerous-goods-rmd-">Miscellaneous Dangerous goods ( RMD )</h4>
		<p>adalah barang-barang lain yang dianggap berbahaya dan mengancam keselamatan penerbangan apabila diangkut dengan menggunakan moda udara seperti magnet, biang es, kendaraan, kursi roda elektrik dan lain-lain</p>


		<p>Anda dapat melihat hasil kerja kami di <Link to="/galeri">gallery</Link>minat menggunakan dengan jasa kami ? silahkan klik <Link to="/order">order</Link>atau jika anda ingin bertanya-tanya, silahkan hubungi salah satu <a href="#/" onClick={() => Context.set('balloon', true)}>admin</a> kami.</p>
	</>
}

export default function Layanan() {
	return (<Page className="paper justify" maxWidth="md">
		<Route path="/layanan/darat" component={Darat} />
		<Route path="/layanan/laut" component={Laut} />
		<Route path="/layanan/udara" component={Udara} />
	</Page>)
}