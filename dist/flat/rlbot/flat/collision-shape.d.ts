import { BoxShape } from '../../rlbot/flat/box-shape';
import { CylinderShape } from '../../rlbot/flat/cylinder-shape';
import { SphereShape } from '../../rlbot/flat/sphere-shape';
export declare enum CollisionShape {
    NONE = 0,
    BoxShape = 1,
    SphereShape = 2,
    CylinderShape = 3
}
export declare function unionToCollisionShape(type: CollisionShape, accessor: (obj: BoxShape | CylinderShape | SphereShape) => BoxShape | CylinderShape | SphereShape | null): BoxShape | CylinderShape | SphereShape | null;
export declare function unionListToCollisionShape(type: CollisionShape, accessor: (index: number, obj: BoxShape | CylinderShape | SphereShape) => BoxShape | CylinderShape | SphereShape | null, index: number): BoxShape | CylinderShape | SphereShape | null;
