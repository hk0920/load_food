import styled from "styled-components"


interface PropsDataType{
	address : string,
	businessPlaceName : string,
	businessStatusClassificationName : string,
	businessStatusCode : number,
	businessStatusName : string,
	closedBusinessDate : number,
	codeOpenLocalGovernment: number,
	dateAuthorization: number,
	detailedBusinessStatusCode : number,
	id : number,
	locationArea : string,
	locationPostalCode : number,
	managementNumber:number,
	phoneNumber : number,
	roadNameAddress : string,
	roadNamePostalCode : string,
	x : number,
	y : number
}


interface PropsType{
	total : number,
	data: PropsDataType[]
}

export function List(props:PropsType){

	const Total = styled.p`
		margin-bottom:30px;
		strong{
			font-weight:bold;
		}
	`;
	
	const ListUl = styled.ul`
		display:flex;
		flex-wrap:wrap;
	`;

	const ListItem = styled.li`
		width:calc(50% - 10px);
		margin-right:20px;
		padding:20px;
		border:1px solid #e5e5e5;
		border-radius:12px;

		&:nth-child(even){
			margin-right:0;
		}

		&:not(:nth-child(-n+2)){
			margin-top:20px;
		}

		.box__label{
				span{
					display:inline-block;
					padding:5px 10px;
					font-size:14px;
					border:1px solid #e5e5e5;
					border-radius:15px;

					&:not(:last-child){
						margin-right:5px;
					}

					&.text__status{
						background:#e5e5e5;

						&.on{
							color:#7ec9d5;
							background:#fff;
							border-color:#7ec9d5;
						}
					}
				}
		}

		.text__store{
			margin-top:10px;
			font-size:20px;
			font-weight:bold;
		}

		.text__address{
			margin-top:15px;
			font-size:14px;
			color:#999;
		}
	`;

	return(
		<div className="inner">
			<Total>Total : <strong>{props.total}</strong></Total>
			<ListUl>
				{props.data.map((item,idx)=>{
					return(
						<ListItem key={idx}>
							<div className="box__label">
								<span className="text__category">{item.businessStatusClassificationName}</span>
								<span className={item.businessStatusCode?"text__status on":"text__status"}>{item.businessStatusName}</span>
							</div>
							<p className="text__store">{item.businessPlaceName}</p>
							<p className="text__address">{item.address}</p>
						</ListItem>
					)
				})}
			</ListUl>
		</div>
	)
}