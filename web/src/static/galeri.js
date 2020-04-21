import React from 'react';
import Page from '../widget/page';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { publicUrl } from '../main/Config';

export default function Galeri() {

	return (<Page style={{maxWidth: 'calc(100vw - 80px)'}} textAlign="center">
		<h1>Galeri Best Logistics</h1>
		<GridList cellHeight={400} cols={3}>
			{
				[2, 1, 2, 1, 1, 2, 1, 2].map((x, i) =>
					<GridListTile key={i} cols={x}>
						<img src={`${publicUrl}/assets/gallery/${i + 1}.jpg`} alt="" />
					</GridListTile>
				)
			}
		</GridList>
		<h2>Galeri Kegiatan Best Logistics</h2>
		<GridList cellHeight={400} cols={3}>
			{
				[
					1, 2, 3, 3, 1, 1, 1, 1, 1, 1,
					1, 2, 1, 2, 1, 1, 1, 1, 2, 1,
					1, 1, 1, 2, 3
				].map((x, i) =>
					<GridListTile key={i} cols={x}>
						<img src={`${publicUrl}/assets/kegiatan/${i + 1}.jpeg`} alt="" />
					</GridListTile>
				)
			}
		</GridList>
		<h2>Galeri Armada Best Logistics</h2>
		<GridList cellHeight={400} cols={3}>
			{
				[1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1].map((x, i) =>
					<GridListTile key={i} cols={x}>
						<img src={`${publicUrl}/assets/armada/${i + 1}.jpeg`} alt="" />
					</GridListTile>
				)
			}
		</GridList>
		<h2>Galeri Cargo Best Logistics</h2>
		<GridList cellHeight={400} cols={3}>
			{
				[2, 1, 2, 1, 1, 2, 1, 2].map((x, i) =>
					<GridListTile key={i} cols={x}>
						<img src={`${publicUrl}/assets/cargo/${i + 1}.jpeg`} alt="" />
					</GridListTile>
				)
			}
		</GridList>
		<h2>Galeri Udara Best Logistics</h2>
		<GridList cellHeight={400} cols={3}>
			{
				[1, 2, 1, 1, 1, 2, 1, 2, 1].map((x, i) =>
					<GridListTile key={i} cols={x}>
						<img src={`${publicUrl}/assets/udara/${i + 1}.jpeg`} alt="" />
					</GridListTile>
				)
			}
		</GridList>
	</Page>)
}