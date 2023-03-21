package sia.tacocloud.repositories;

import sia.tacocloud.entities.TacoOrder;

public interface OrderRepository {
    TacoOrder save(TacoOrder order);
}
