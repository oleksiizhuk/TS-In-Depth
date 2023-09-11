
interface Inventory<T> {
    getNewestItem: () => T;
    addItem: (newItem: T) => void;
}

interface CatalogItem {
    catalogNumber: number;
}

class Catalog<T extends CatalogItem = CatalogItem> implements Inventory<T> {
    items: T[] = [];
    getNewestItem() {
        if (this.items.length === 0) {
            throw new Error('Catalog is empty');
        }
        return this.items.reduce((prev, current) =>
            prev.catalogNumber > current.catalogNumber ? prev : current
        );
    }
    addItem(newItem: T) {
        this.items.push(newItem);
    }
}
