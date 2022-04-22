import{Link} from 'react-router-dom'
import styles from './ProjectCard.mudelo.css'

import { Bspencil, BsFillTrashFill } from 'react-icons/bs'

function ProjectCard({id, name, budget, category, handleRemove}) {
		return (
		<div className = {styles.project_card}>
			<h4> {name} </h4>
			<p>
				<span> Orcamento: </span> R${budget}
			</p>
		<p className={styles.category_text}>
			<span>className={`$styles[category.toLowerCase()]`} </span> {category}
		</p>
		<div className= {styles.project_card_actions}>
			<Link to ="/">
				 <BsPencil /> Editar
					</Link>
					<button>
						<BssFillTrashFill /> 
					</button>
			</div>
		</div>
	)
}

export default ProjectCard