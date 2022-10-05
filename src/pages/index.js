import styles from '../styles/index.module.css'

export default function Home() {
	return (
		<main className={styles.main}>
			<img className={styles.logo} src="logo.svg" />
			<div className={styles.container}>
				<div className={styles['container-form-control-bill']}>
					<label>Bill</label>
					<div className={styles['container-input-controll-bill']}>
						<img
							className={styles['logo-dollar-input-control-bill']}
							src="/icon-dollar.svg"
						></img>
						<input className={styles['input-controll-bill']} />
					</div>
				</div>

				<div className={styles['container-form-control-percentage']}>
					<label>Select Tip %</label>
					<div className={styles['container-form-control-percentage-elements']}>
						<button className={styles['button-control-percentage']}> 5%</button>
						<button className={styles['button-control-percentage']}>10%</button>
						<button className={styles['button-control-percentage']}>15%</button>
						<button className={styles['button-control-percentage']}>25%</button>
						<button className={styles['button-control-percentage']}>50%</button>
						<input
							className={styles['button-control-percentage']}
							placeholder="Custom"
						/>
					</div>
				</div>

				<div className={styles['container-form-control-people']}>
					<label>Number of People</label>
					<input />
				</div>

				<div className={styles['container-final-result']}>
					<button>RESET</button>
				</div>
			</div>
		</main>
	)
}
