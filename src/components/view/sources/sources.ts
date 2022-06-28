import './sources.css';

class Sources {
    draw(data) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = (sourceItemTemp as HTMLTemplateElement).content.cloneNode(true);

            (sourceClone as HTMLElement).querySelector('.source__item-name').textContent = item.name;
            (sourceClone as HTMLElement).querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources').append(fragment);
    }
}

export default Sources;
