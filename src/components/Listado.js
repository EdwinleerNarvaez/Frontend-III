

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.
import Item from './Item';
import info from './data.json';


const informacion = info;
export default function Listado(props) {
  return (
    <div className='container'>
      {
      informacion.map(dato => {
        return(
          <Item 
          key={dato.id}
          nombre={dato.producto.nombre}
          descripcion={dato.producto.descripcion}
          stocks={dato.stock}
          contador={props.contador}>
          </Item>
        )

      })


      }
    </div>
  )
}
