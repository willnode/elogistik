import React from 'react';
import Page from '../widget/page';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { publicUrl } from '../main/Config';

export default function Galeri() {

	return (<Page>
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

	</Page>)
}